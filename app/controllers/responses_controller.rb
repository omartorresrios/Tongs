class ResponsesController < ApplicationController
  before_action :authenticate_user!, :set_post

  def create
    @response = current_user.responses.create(body: params[:response][:body], post_id: @post.id)
    if @response.valid?
      notify_author_and_responders
      respond_to do |format|
        format.html { redirect_to @post }
        format.js
      end
    else
      # TODO: display useful error message
      render nothing: true
    end
  end

  def destroy
    @response = @post.responses.find(params[:id])
    if @response.user_id == current_user.id
      @response.delete
      respond_to do |format|
        format.html { redirect_to @post }
        format.js
      end
    end
  end

  private

    def set_post
      @post = Post.find(params[:post_id])
    end

    def notify_author_and_responders
      (@post.responders.uniq - [current_user]).each do |user|
        Notification.create(recipient: user, actor: current_user, action: "también comentó en un", notifiable: @post, is_new: true)
      end
      unless current_user?(@post.user) || @post.responders.include?(@post.user)
        Notification.create(recipient: @post.user, actor: current_user, action: "respondió tu", notifiable: @post, is_new: true)
      end
    end
end