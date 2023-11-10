class ApplicationController < ActionController::Base
  before_action :opened_conversations_windows
  # before_action :set_gon

  def set_gon
    gon.push({
      last_visible_chat_window: gon.last_visible_chat_window,
      hidden_chats: gon.hidden_chats
    })
  end
  
  def redirect_if_not_signed_in
    redirect_to root_path if !user_signed_in?
  end
  
  def redirect_if_signed_in
    redirect_to root_path if user_signed_in?
  end
  
  def opened_conversations_windows
    if user_signed_in?
      # opened conversations
      session[:private_conversations] ||= []
      @private_conversations_windows = Private::Conversation.includes(:recipient, :messages)
                                        .find(session[:private_conversations])
    else
      @private_conversations_windows = []
    end
  end
end
