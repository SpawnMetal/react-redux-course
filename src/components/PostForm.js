import React from 'react'
import {connect} from 'react-redux'
import {createPost, showAlert} from '../redux/actions'
import {Alert} from './Alert'

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  submitHandler = event => {
    event.preventDefault() // Чтобы страница не перезагружалась

    const {title} = this.state

    if (!title.trim())
      return this.props.showAlert('Название поста не может быть пустым')

    const newPost = {title, id: Date.now().toString()}

    console.log(newPost)
    this.props.createPost(newPost) // Функция из actions.js будет вызывать диспатч
    this.setState({title: ''})
  }

  changeInputHandler = event => {
    event.persist()
    this.setState(prev => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}

        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success mt-2" type="submit">
          Создать
        </button>
      </form>
    )
  }
}

// Мапим диспатч на пропсы
const mapDispatchToProps = {
  createPost,
  showAlert,
}

const mapStateToProps = state => ({alert: state.app.alert})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
// export default connect(null, {createPost})(PostForm) // Можно написать и так, просто через mapDispatchToProps будет нагляднее
