import React from 'react';
import './Entry.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faTags, faUser} from '@fortawesome/free-solid-svg-icons'


function Entry(props) {
	return (
		<div className="col-md-11" key="{props.key}">
			<div className="blog-entry ftco-animate d-md-flex fadeInUp ftco-animated">
				<a href={props.url} className="img img-2" style={ {backgroundImage: `url(${props.image})` }} />
				<div className="text text-2 pl-md-4">
					<h3 className="mb-2"><a href={props.url}>{props.title}</a></h3>
					<div className="meta-wrap">
						<p className="meta">
							<span><FontAwesomeIcon icon={faCalendarAlt} />  {props.date}</span>
							<span><a href={props.url}><FontAwesomeIcon icon={faTags} /> {props.tag}</a></span>
							<span><FontAwesomeIcon icon={faUser} />  {props.author}</span>
						</p>
					</div>
					<p className="mb-4">{props.description}</p>
					<p><a href={props.url} className="btn btn-custom">Read More <span className="ion-ios-arrow-forward" /></a></p>
				</div>
			</div>
		</div> 
	);
}
export default Entry;