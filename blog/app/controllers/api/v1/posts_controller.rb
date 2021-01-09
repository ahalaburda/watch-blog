module Api
	module V1
		class PostsController < ApplicationController
			protect_from_forgery with: :null_session
			def index
				posts = Post.all
				render json: PostSerializer.new(posts).serialized_json
			end

			# CREATE
			def create
				post = Post.new(post_params)
				if post.save
					render json: PostSerializer.new(post).serialized_json
				else
					render json: { error: post.errors.messages }, status: 422
				end
			end
			# READ
			def show
				posts = Post.find_by(id: params[:id])
				render json: PostSerializer.new(posts).serialized_json
			end
			# UPDATE
			def update
				post = Post.find_by(id: params[:id])
				if post.update(post_params)
					render json: PostSerializer.new(post).serialized_json
				else
					render json: { error: post.errors.messages }, status: 422
				end
			end
			# DESTROY
			def destroy
				post = Post.find_by(id: params[:id])
				if post.destroy
					head :no_content
				else
					render json: { errors: post.errors.messages }, status: 422
				end
			end

			private
			def post_params
				params.require(:post).permit(:title, :description, :author, :image_url)
			end	
		end
	end
end