# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(username: "admin", password: "admin", name: "Administrator")

post = Post.create([
      {
         "author":"Simon Walsh",
         "title":"Stainless steel Citizen and Timex timepieces fall by up to 50% at Amazon, now priced from $64",
         "description":"Today at Amazon we’ve spotted a few Citizen and Timex timepieces that are up to 50% off. Our top pick is the Citizen Quartz Stainless Steel Watch (BI5050-54E) for $89.97 shipped. That’s $20 off the typical rate there and is the lowest price we have tracked si…",
         "image_url":"https://i2.wp.com/9to5toys.com/wp-content/uploads/sites/5/2021/01/Citizen-Quartz-Stainless-Steel-Watch-BI5050-54E.jpg?resize=1200%2C628&ssl=1",
      },
      {
         "author":"Zach Kazan",
         "title":"So, You Want to be an Astronaut? A look at the Forstner Komfit Bracelet, a Speedmaster Accessory for the NASA Enthusiast",
         "description":"It’s something of a truism that when it comes to sports watches, there are bracelet guys, and there are strap guys. We see the divide right here on the Worn & Wound team, and I bet many readers have strong opinions either way about the appropriate mount for S…",
         "image_url":"https://wornandwound.com/library/uploads/2021/01/Forstner-Komfit-7b-scaled.jpg",
      },
      {
         "author":"HODINKEE",
         "title":"Magazine Feature: Aldis Hodge's Path To Purpose",
         "description":"The actor and watch designer explores his personal history with horology and how watches can be used to build a lasting legacy.",
         "image_url":"https://hodinkee.imgix.net/uploads/images/1610050431021-tybm6w9kfe-3a63fdb26d6467b4ff619527a1e2296d/hero.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=1000",
      },
      {
         "author":"Killian Bell",
         "title":"Last chance: Save on superb Apple Watch bands from Juuk, Rilee & Lo",
         "description":"Bagged a new Apple Watch over the holidays? Upgrade your look with up to 20% off superb bands and bracelets from Juuk and Rilee & Lo. There are a range of leather and metal options to choose from, with prices starting at just $16 in the Cult of Mac Store’s bi…",
         "image_url":"https://cdn.cultofmac.com/wp-content/uploads/2017/09/42mm-JUUK-Rose-Gold-Ligero-Apple-Watch-Band-8.jpg",
      },
      {
         "author":"Oliver Haslam",
         "title":"Bag An Apple Watch Series 5 In 44mm Size For Just $329",
         "description":"Amazon is currently offering the opportunity to pick up a new Apple Watch Series 5, in 44mm configuration, for just $329. You don't need to enter any discount codes nor clip any on-screen coupons but stocks are likely to be considerably limited. Keep that in …",
         "image_url":"https://cdn.redmondpie.com/wp-content/uploads/2020/11/series-5-thanksgiving-deal-1-1024x679.jpg",
      },
      {
         "author":"spatter",
         "title":"107° - Tudor Black Bay Bronze Leather Strap Watch £2,333 @ David M Robinson",
         "description":"The Black Bay Date is an emblematic model that celebrates more than 60 years of TUDOR divers’ watches.<br /><br />This TUDOR Black Bay Bronze is an exciting 43mm piece, displaying time across a brown dial surrounded by a unidirectional bezel and worn on a bro…",
         "image_url":"https://images.hotukdeals.com/threads/thread_full_screen/default/3643699_1.jpg",
      },
      {
         
         "author":"Mark Bernardo",
         "title":"Running On Air: The History of the Jaeger-LeCoultre Atmos Clock",
         "description":"Jaeger-LeCoultre’s Atmos clocks, whose ingenious, near-perpetual mechanical movements are driven by air temperature changes, have been pushing the boundaries of horology and design since the 1930s. We explore their fascinating history and avant-garde evolutio…",
         "image_url":"https://static.watchtime.com/wp-content/uploads/2021/01/JLC_Atmos_1_1930_FI.jpg",
      },
      {
         "author":"Logan Baker",
         "title":"In The Shop - In The Shop: The Oris Divers Sixty-Five 'Sunset Brown'",
         "description":"A tropical take on two tone.",
         "image_url":"http://cdn.shopify.com/s/files/1/0146/0732/articles/Oris71-72-Lifestyle-002_339927e7-e469-4dc3-91b4-3012b68bf839_1024x1024.jpg?v=1610121885",
      },
      {  
         "author":"twofeetunder",
         "title":"This Insane $972,000 Watch Is the First Wrist-Worn Timepiece to Use Acoustic Resonance",
         "description":"The Deep Space Resonance was 25 years in the making.",
         "image_url":"https://robbreport.com/wp-content/uploads/2021/01/VH-DST-R-Front-1-A4-W.gif?w=1000",
      },
      {
         "author":"Blake Buettner",
         "title":"Introducing The Hemel Airfoil",
         "description":"British pilot watch enthusiasts have been spoiled for choice in recent years (decades?) with a plethora of options from the likes of Bremont, Farer, and Breitling. And that’s only scratching the surface. New York based microbrand, Hemel, is adding to the list…",
         "image_url":"https://wornandwound.com/library/uploads/2021/01/Hemel_Airfoil_Header.jpg",
      },
      {
         "author":"Rob Nudds",
         "title":"Hands-On Review Of The Bangalore Watch Company Mach 1A Automatic",
         "description":"I’ve had this watch in my possession for months longer than planned. We get sent a lot (and I really do mean a lot) of watches to assess, and sometimes it takes us a little bit of time to get to them. When it came to the Bangalore Watch Company Mach 1A, I was…",
         "image_url":"https://static.fratello.com/2021/01/Bangalore-Mach-1-Watch-India-Indian-Watch-52.jpg",
      }
  ])