class API::UsersRankingController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all.sort{|a, b| b.sum_validations <=> a.sum_validations}
  end
end