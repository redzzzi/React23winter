import {Component} from 'react'

export type ClassComponentProps = {
  href: string
  text: string
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const {href, text} = this.props // 비구조화 할당 구문
    return (
      <li>
        <a href={href}>
          <p>{text}</p>
        </a>
      </li>
    )
  }
}
