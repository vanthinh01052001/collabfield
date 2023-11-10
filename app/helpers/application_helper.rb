require './app/helpers/navigation_helper.rb'
module ApplicationHelper
  include NavigationHelper
  include PostsHelper
  include Private::ConversationsHelper
end
