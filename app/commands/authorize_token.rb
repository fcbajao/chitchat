class AuthorizeToken
  prepend SimpleCommand

  def initialize(token)
    @token = token
  end

  def call
    user
  end

  private
  
  def user
    token = JsonWebToken.decode(@token)
    if token.present?
      User.find(token[:id])
    else
      errors.add(:token, "Invalid token.")
      nil
    end
  end
end
