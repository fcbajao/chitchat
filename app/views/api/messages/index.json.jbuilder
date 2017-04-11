json.array! @messages do |message|
  json.(message, :id)
  json.content sanitize(message.content)

  json.user do
    json.(message.user, :id, :username)
  end
end
