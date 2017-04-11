Rails.application.routes.draw do
  root to: "home#index"

  namespace :api, constraints: { format: :json } do
    post "users/authenticate", to: "users#authenticate"
    get "messages", to: "messages#index"
  end

  match "*path", to: "home#index", via: :all
end
