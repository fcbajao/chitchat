class FetchRecentMessages
  prepend SimpleCommand

  DEFAULT_LIMIT = 50

  def initialize(options = {})
    @limit = options[:limit] || DEFAULT_LIMIT
  end

  def call
    Message.order(id: :desc).limit(@limit)
  end
end
