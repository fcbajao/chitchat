class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # TODO: Move this to a background job.
    SendMessage.call(current_user, data["message"])
  end
end
