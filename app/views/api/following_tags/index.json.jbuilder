json.array! @tags do |tag|
  json.id tag.id
  json.name tag.name
  json.urlPath tag_path(tag)
  json.slug tag.slug
end
