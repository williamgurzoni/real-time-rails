Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"

  # mount ActionCable.server, at: "/cable"
end
