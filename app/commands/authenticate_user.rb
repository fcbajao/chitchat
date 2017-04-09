class AuthenticateUser
  prepend SimpleCommand

  def initialize(username, password)
    @username = username
    @password = password
  end

  def call
    if user.authenticate(@password)
      JsonWebToken.encode(user_id: user.id, username: user.username)
    else
      errors.add(:authenticate, "Invalid username or password.")
    end
  end

  private

  def user
    @user ||= if user = User.find_by_username(@username)
                user
              else
                User.create(username: @username, password: @password)
              end
  end
end
