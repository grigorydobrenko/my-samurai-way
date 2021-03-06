export type PostType = {
    id?: number,
    message: string,
    likes: number,
}

export type DialogType = {
    name: string,
    id: number,
}

export type MessageType = {
    id?: number,
    message: string
}

export type FriendType = {
    id?: number,
    name: string,
    avatar: string
}

export type sidebarType = {
    friends: Array<FriendType>
}


export type profilePageType = {
    posts: Array<PostType>
}

export type dialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export type RootStateType = {
    profilePage: profilePageType,
    dialogPage: dialogPageType
    sidebar: sidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: 'Hi, its me',
                likes: 4,
            },
            {
                id: 2,
                message: 'Hello',
                likes: 15,
            },
        ]
    },
    dialogPage: {
        dialogs: [
            {
                name: 'Leha',
                id: 1,
            },
            {
                name: 'Dima',
                id: 2,
            }, {
                name: 'Max',
                id: 3,
            }, {
                name: 'Kate',
                id: 4,
            }, {
                name: 'Den',
                id: 5,
            },
        ],
        messages: [
            {
                id: 1,
                message: 'Hi'
            },
            {
                id: 2,
                message: 'Its me'
            }, {
                id: 3,
                message: 'Hello'
            },
        ]


    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: 'Andre',
                avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/47/4728872986d1945672dcce488d66a3f9c73cfd14.jpg'
            },
            {
                id: 2,
                name: 'Sasha',
                avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/cd/cd5f9289ba1dd52feed889864112f04174f361a9.jpg'
            }, {
                id: 3,
                name: 'Sveta',
                avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d4/d4f601fa54910219064ab99ee51084225d7734f8.jpg'
            },
        ]
    }
}


/*
const DialogItemsData: Array<DialogItemPropsType> = [
    {
        name: 'Leha',
        id: 1,
    },
    {
        name: 'Dima',
        id: 2,
    }, {
        name: 'Max',
        id: 3,
    }, {
        name: 'Kate',
        id: 4,
    }, {
        name: 'Den',
        id: 5,
    },
]


const MessagesData: Array<MessagePropsType> = [
    {
        id: 1,
        message: 'Hi'
    },
    {
        id: 2,
        message: 'Its me'
    }, {
        id: 3,
        message: 'Hello'
    },
]

const PostsData: Array<MyPostPropsType> = [
    {
        id: 1,
        message: 'Hi, its me',
        likes: 4,
    },
    {
        id: 2,
        message: 'Hello',
        likes: 15,
    },
]*/
