class SendMessage
  prepend SimpleCommand

  def initialize(user, content)
    @user = user
    @content = content
  end

  def call
    message = Message.create(user: @user, content: sanitize(@content))
    ActionCable.server.broadcast("messages", data(message))
    message
  end

  private

  def data(message)
    {
      id: message.id,
      content: message.content,
      created_at: message.created_at,
      user: {
        id: message.user.id,
        username: message.user.username
      }
    }
  end
  
  def sanitize(content)
    Rails::Html::FullSanitizer.new.sanitize(content).strip
  end
end
