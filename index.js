const todos = ['watching a movie', 'shopping', 'eat delicious food']

const showTodos = data => {
    for(let i = 0; i < data.length; i++) {
        const item = data[i]

        console.log(`[${i + 1}] ${item}`)
    }
}

showTodos(todos)

const todos1 = ['watching a movie', 'shopping', 'eat delicious food']

const searchTodos = (data, textToSearch) => {
    let newTodos = []

    for(let i = 0; i < data.length; i++) {
        const item = data[i]

        const lowerCasedItem = item.toLowerCase()
        const lowerCasedText = textToSearch.toLowerCase()

        if(lowerCasedItem.includes(lowerCasedText)) {
            newTodos.push(item)
        }
    }

    return newTodos
}

const foundTodos = searchTodos(todos1, 'eat')

showTodos(foundTodos)

const foundTodos1 = searchTodos(todos1, 'movie')

showTodos(foundTodos1)

const myTodos = [
    {
      id: 1,
      text: 'Watching a movie',
      tags: ['important', 'watching'],
      favorite: true,
      completed: true
    },
    {
      id: 2,
      text: 'shopping',
      tags: ['hobbies'],
      completed: false,
       favorite: true,
    },
    {
      id: 3,
      text: 'eat delicious food',
      favorite: false,
      completed: true
    }
  ]

  const showTodos1 = data => {
      for(let i = 0; i < data.length; i++) {
          const item = data[i]

          let itemString = ``

          itemString += item.completed ? `☑` : `x` 
          itemString += ` ${item.text} `
          itemString += item.favorite ? `★` : `x` 

          console.log(itemString)
      }
  }

  showTodos1(myTodos)

  const searchTodosText = (data, searchText) => {
      let newTodos = []

      for(let i = 0; i < data.length; i++) {
          const item = data[i]

          const lowerCasedItemtText = item.text.toLowerCase()
          const lowerCasedSearchText = searchText.toLowerCase()

          if(lowerCasedItemtText.includes(lowerCasedSearchText)) {
              newTodos.push(item)
          }
      }

      return newTodos
  }

  const foundTodos2 = searchTodosText(myTodos, "movie")

  showTodos1(foundTodos2)
  





