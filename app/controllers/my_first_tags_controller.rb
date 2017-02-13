class MyFirstTagsController < ApplicationController

  def show
  	@tags = Tag.all
  end

end
