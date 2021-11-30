class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: %i[ show edit update destroy ]


  # GET /posts or /posts.json
  def index
    @posts = Post.where(user_id: current_user.id)#where(user_id: params[:id])
  end

  # GET /posts/1 or /posts/1.json
  def show
  end

  def hashtags
      tag = Tag.find_by(name: params[:name])
      @posts = tag.posts.where(user_id: current_user.id) | tag.posts.where(privacy: false)
      @result = []
      @posts.each do |post|
          temp_post = post.attributes
          temp_post['image'] = url_for(post.image)
          temp_post['user_email'] = post.user.email
          @result.push(temp_post)
      end
  end

  def feed
      @posts = Post.where(user_id: current_user.id) | Post.where(privacy: false)
      @result = []
      @posts.each do |post|
          temp_post = post.attributes
          temp_post['image'] = url_for(post.image)
          temp_post['user_email'] = post.user.email
          @result.push(temp_post)
      end
  end

  # GET /posts/new
  def new
    @post = Post.new
    @post.user_id = current_user.id
    @post.save
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts or /posts.json
  def create
      post = Post.create(post_params)
      render json: post, status: :created
  end

  # PATCH/PUT /posts/1 or /posts/1.json
  def update
      if @post.update(post_params)
          render json: {test: 'asdasd'}
      else
          render json: @post.errors, status: :unprocessable_entity
      end
  end

  # DELETE /posts/1 or /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: "Post was successfully destroyed." }
      format.json { head :no_content }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
        params.permit(:image,:privacy,:hashtags)
    end
end
