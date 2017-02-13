class API::FollowTagsSuggestionsController < ApplicationController
  before_action :authenticate_user!

  def index
    @tags = current_user.tag_to_follow
  end
end