class Api::MessagesController < Api::ApplicationController
  before_action :authenticate_request

  def index
    @messages = messages
  end

  private

  def messages
    FetchRecentMessages.call(limit: params[:limit].to_i).result
  end
  
  def authenticate_request
    command = AuthorizeToken.call(token)
    render_unauthorized(command.errors) unless command.success?
  end

  def token
    if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end
  end

  def render_unauthorized(errors)
    render json: { error: errors }, status: :unauthorized
  end
end
