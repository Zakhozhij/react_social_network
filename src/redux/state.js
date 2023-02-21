let state={
  profilePage:{
    posts:[
      {
          id: 1,
          message: 'Hi',
          likesCount:3
      },
      {
          id: 2,
          message: 'How are you?',
          likesCount:2
      },
      {
          id: 3,
          message: 'Where are you?',
          likesCount:32
      },
      {
          id: 4,
          message: 'Who are you?',
          likesCount:5
      },
      {
          id: 5,
          message: 'Why are you?',
          likesCount:1
      }
    ]
  },
  dialogsPage:{
    messages:[
      {
          id: 1,
          message: 'HiWhy are you? What was the most difficult situation  in your life? Could you tell me about this or not?Why are you? What was the most difficult situation  in your life? Could you tell me about this or not?Why are you? What was the most difficult situation  in your life? Could you tell me about this or not?Why are you? What was the most difficult situation  in your life? Could you tell me about this or not?',
          photo:'https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?cs=srgb&dl=pexels-jovana-nesic-593655.jpg&fm=jpg',
          userSend:0
      },
      {
          id: 2,
          message: 'How are you?',
          photo:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          userSend:1
      },
      {
          id: 3,
          message: 'Where are you?',
          photo:'https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?cs=srgb&dl=pexels-jovana-nesic-593655.jpg&fm=jpg',
          userSend:1
      },
      {
          id: 4,
          message: 'Who are you?',
          photo:'https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?cs=srgb&dl=pexels-jovana-nesic-593655.jpg&fm=jpg',
          userSend:1
      },
      {
          id: 5,
          message: 'Why are you?',
          photo:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
      },
      {
          id: 6,
          message: 'Why are you? What was the most difficult situation  in your life? Could you tell me about this or not?Why are you? What was the most difficult situation  in your life? Could you tell me about this or not?',
          photo:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          userSend:1
      },
      {
          id: 7,
          message: 'Why are you?',
          photo:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
      },
      {
          id: 8,
          message: 'Why are you?Why are you? What was the most difficult situation  in your life? Could you tell me about this or not?Why are you? What was the most difficult situation  in your life? Could you tell me about this or not?Why are you? What was the most difficult situation  in your life? Could you tell me about this or not?',
          photo:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          userSend:1
      },
      {
          id: 9,
          message: 'Why are you?',
          photo:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
      },
      {
          id: 10,
          message: 'Why are you?',
          photo:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
      }
    ],
    dialogs:[
      {
          id: 1,
          name: 'Dimych Ivanov',
          avatar: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
      },
      {
          id: 2,
          name: 'Max Zakhozhij',
          avatar: 'https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?cs=srgb&dl=pexels-jovana-nesic-593655.jpg&fm=jpg'
      },
      {
          id: 3,
          name: 'Igor Ignatev',
          avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
      },
      {
          id: 4,
          name: 'Semen Vladimirov',
          avatar: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippe-donn-1133957.jpg&fm=jpg'
      },
      {
          id: 5,
          name: 'Alena Alexandrova',
          avatar: 'https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0='
      },
      {
          id: 6,
          name: 'Igor Ignatev',
          avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
      },
      {
          id: 7,
          name: 'Ignat Igorev',
          avatar: 'https://images.theconversation.com/files/90015/original/image-20150729-30889-ri221u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
      },
      {
          id: 8,
          name: 'Elena Frolova',
          avatar: 'https://static.fotor.com/app/features/img/aiface/advance/1.png'
      },
      {
          id: 9,
          name: 'Nataliy Dorosh',
          avatar: 'https://im.indiatimes.in/content/itimes/blog/2016/Jul/22/1469162215-how-to-read-faces.jpg?w=1200&h=900&cc=1'
      },
      {
          id: 10,
          name: 'Victoria Alona',
          avatar: 'https://coleaestheticcenter.com/wp-content/uploads/2021/09/why-are-symmetrical-faces-attractive-768x512.jpg'
      },
      {
          id: 11,
          name: 'Dima Kyznecov',
          avatar: 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528'
      }
    ]
  },
  navBarPage:{
    friends:[
        {
            id: 1,
            name: 'Dimych Ivanov',
            avatar: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
        },
        {
            id: 2,
            name: 'Max Zakhozhij',
            avatar: 'https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?cs=srgb&dl=pexels-jovana-nesic-593655.jpg&fm=jpg'
        },
        {
            id: 3,
            name: 'Igor Ignatev',
            avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        },
        {
            id: 4,
            name: 'Semen Vladimirov',
            avatar: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?cs=srgb&dl=pexels-philippe-donn-1133957.jpg&fm=jpg'
        },
        {
            id: 5,
            name: 'Alena Alexandrova',
            avatar: 'https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0='
        },
        {
            id: 6,
            name: 'Igor Ignatev',
            avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        }
      ]
  }
}
export default state;