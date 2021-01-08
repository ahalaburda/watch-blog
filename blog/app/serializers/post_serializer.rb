class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :description, :image_url
end
