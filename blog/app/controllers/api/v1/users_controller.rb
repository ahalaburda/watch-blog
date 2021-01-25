  module Api
  module V1
    class UsersController < ApplicationController
      before_action :authorized, only: [:auto_login]

      # SIGN UP
      def create
        @user = User.create(user_params)
        if @user.valid?
          token = encode_token({user_id: @user.id})
          render json: {user: @user, token: token}
        else
          render json: {error: "Invalid username or password", status: 422}, status: :unprocessable_entity
        end
      end

      # SIGN IN
      def login
        @user = User.find_by(username: params[:username])

        if @user && @user.authenticate(params[:password])
          token = encode_token({user_id: @user.id})
          render json: {user: @user, token: token}
        else
          render json: {error: "Invalid username or password",status: 422}, status: :unprocessable_entity
        end
      end


      def auto_login
        render json: @user
      end

      private

      def user_params
        params.permit(:username, :password, :name)
      end

    end
  end
end