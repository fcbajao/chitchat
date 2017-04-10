module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = get_verified_user
    end

    private

    def get_verified_user
      command = AuthorizeToken.call(request.params[:token])
      if command.success? 
        command.result 
      else
        reject_unauthorized_connection
      end
    end
  end
end
