import React, { Component,useState } from 'react'
import axios from 'axios'
import './Admin.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {Button,Modal} from 'react-bootstrap'

/**
 * Admin component with a CRUD UI to add local entries in the blog.
 */

const url = "http://localhost:3000/api/v1/posts";

class Admin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: [],
			showModal: false,
			modalEdit: false,
			modalDelete: false,
			form:{
				id:'',
				created_at:'',
				updated_at:'',
				title:'',
				author:'',
				image_url:'',
				description:'',
			}
		}
	}
/**
 * Admin component with a CRUD UI to add local entries in the blog
 */
	getEntry=(article)=>{
		this.setState({
			modalEdit: true,
			form: {
				id: article.id,
				title: article.attributes.title,
				author: article.attributes.author,
				description: article.attributes.description,
				image_url: article.attributes.image_url,
				created_at: article.attributes.created_at,
				updated_at: article.attributes.updated_at
			}
		});
	}
	/**
	 *  Method in charge to change the state of the modal form to true or false when this is opened or closed.
	 */
	modalForm = () =>{
		this.setState({
			showModal : !this.state.showModal});
	}
	/**
	 * Async method for get data introduced in every input of the modal form and update the state.
	 */
	handleChange=async e=>{
		e.persist();
		await this.setState({
			form:{
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	}
	/**
	 * DELETE: remove the record by the element id selected
	 */
	deleteEntry=()=>{
		axios.delete(url+"/"+this.state.form.id)
		.then(response => {
			this.setState({modalDelete:false}); //change the state of the modal edit
			this.getEntries(); //get all the news
		})
		.catch(error => console.log(error))
	}
	/**
	 * PUT: Update the record by the ID
	 */
	updateEntry=()=>{
		axios.put(url+"/"+this.state.form.id, this.state.form)
		.then(response => {
			this.modalForm(); //change the state of the modal form
			this.getEntries(); //get all the news
		})
		.catch(error => console.log(error))
	}
	/**
	 * POST: Add a new record from the modal form. 
	 */
	addEntry=async()=>{
		delete this.state.form.id; //Delete the state from the form, because the id is an auto increment.
		await axios.post(url,this.state.form)
		.then(response => {
			this.modalForm();
			this.getEntries();
		})
		.catch(error => console.log(error))
	}
	/**
	 * GET: Get all the record from the local Database
	 */
	getEntries() {
		axios.get(url)
		.then(response => {
			const reversed = response.data.data.reverse();
			this.setState({articles: reversed});
		})
		.catch(error => console.log(error))
	}

	componentDidMount(){
		this.getEntries();
	}

	render(){
		const {form} = this.state;
		const {modalEdit} = this.state;
		return(
			<div>
				<h3>Local News list</h3>
				<div>
					<button className="btn btn-primary float-right" onClick={()=>{this.setState({form:null, modalEdit:false}); this.modalForm()}}>
						<b>+</b> Add new entry
					</button>
					{/*Table list of all the local news*/}
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Last Update</th>
								<th scope="col">Title</th>
								<th scope="col">Author</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
						{this.state.articles.map( (article, index) => {
            				return (
								<tr key={index}>
									<th scope="row">{article.id}</th>
									<td>{article.attributes.updated_at}</td>
									<td>{article.attributes.title}</td>
									<td>{article.attributes.author}</td>
									<td className="text-center">
										<button className="btn btn-primary btn-sm" onClick={()=>{this.getEntry(article); this.modalForm()}}><FontAwesomeIcon icon={faEdit} /></button>
										<button className="btn btn-danger btn-sm" onClick={()=>{this.getEntry(article); this.setState({modalDelete:true})}} ><FontAwesomeIcon icon={faTrashAlt} /></button>
									</td>
								</tr>
							)}
						)}
						</tbody>
					</table>
					{/*Modal form for add or edit any entry*/}
					<Modal 
						show={this.state.showModal}
						size="lg"
					 >
						<Modal.Header>
							<Modal.Title>{this.state.modalEdit ? "Editing Entry" : "New Entry"}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className="form-group">
								<label htmlFor="title">Title</label>
								<input className="form-control modal-input" type="text" name="title" id="title" onChange={this.handleChange} value={form ? form.title: ''} />
								<br />
								<label htmlFor="author">Author</label>
								<input className="form-control modal-input" type="text" name="author" onChange={this.handleChange} value={form ? form.author: ''} />
								<br />
								<label htmlFor="image_url">Image URL</label>
								<input className="form-control modal-input" type="text" name="image_url" onChange={this.handleChange} value={form ? form.image_url: ''} />
								<br />
								<label htmlFor="description">Content</label>
								<textarea className="form-control modal-input" name="description" rows="3" onChange={this.handleChange} value={form ? form.description: ''}></textarea>
									{this.state.modalEdit 
										?	<div className="row">
												<div className="col-sm">
													<label htmlFor="created_at">Created</label>
													<input className="form-control modal-input" type="text" name="created_at" readOnly onChange={this.handleChange} value={form ? form.created_at: ''} />
												</div>
												<div className="col-sm">
													<label htmlFor="updated_at">Updated</label>
													<input className="form-control modal-input" type="text" name="updated_at" readOnly onChange={this.handleChange} value={form ? form.updated_at: ''} />
											    </div>
											  </div>
										: ""
									 }
							</div>
						</Modal.Body>
						<Modal.Footer>
						<Button variant="secondary" onClick={()=>this.modalForm()}>Close</Button>
							{this.state.modalEdit 
								? <Button variant="primary" onClick={()=>this.updateEntry()}>Update</Button>
								: <Button variant="primary" onClick={()=>this.addEntry()}>Save Changes</Button>
							}
						</Modal.Footer>
					</Modal>
					{/*Delete Modal*/}
					<Modal show={this.state.modalDelete}>
						<Modal.Body>
							<div className="form-group">
								<p>Sorry for asking, but you gonna delete it if continues, are you sure??</p>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="danger" onClick={()=>this.deleteEntry()}>Yes</Button>
							<Button variant="secondary" onClick={()=>this.setState({modalDelete:false})}>No</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		)
	}
}

export default Admin;