json.posts do |json|
  json.array! @posts do |post|
    json.id post.id
    json.title truncate(post.title, length: 38)
    json.body truncate(remove_javascript(post.body.to_s), length: 45, separator: ' ', escape: false)
    json.avatar_url post.user.avatar_url.present? ? post.user.avatar_url : image_path('default-avatar.png')
    json.url post_path(post.slug)
  end
end

json.users do |json|
  json.array! @users do |user|
    json.id user.id
    json.username user.username
    json.avatar_url user.avatar_url.present? ? user.avatar_url : image_path('default-avatar.png')
    json.url user_path(user.slug)
  end
end

json.tags do |json|
  json.array! @tags do |tag|
    json.id tag.id
    json.name tag.name
    json.url tag_path(tag.slug)
  end
end