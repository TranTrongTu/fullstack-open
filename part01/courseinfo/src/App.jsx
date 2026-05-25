const Hello = (props) => {
  // 1. Hàm hỗ trợ nằm gọn trong bụng Hello
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  // 2. Hello BẮT BUỘC phải return ra giao diện
  // Ở đây Hello mới có quyền xài props.name và hàm bornYear()
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  // 3. Nhiệm vụ duy nhất của App là truyền dữ liệu (props) xuống cho Hello
  return (
    <div>
      <Hello name={name} age={age} />
    </div>
  )
}

export default App