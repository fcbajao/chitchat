class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast("messages", id: message_id, content: sanitize(data["message"]), user: to_hash(current_user))
  end

  private

  def to_hash(user)
    {
      id: user.id,
      username: user.username
    }
  end

  def message_id
    # Temporary method to generate unique IDs until we implement storing messages
    # in the database.
    SecureRandom.uuid.gsub("-", "").hex
  end

  def sanitize(content)
    Rails::Html::FullSanitizer.new.sanitize(content).strip
  end
end
