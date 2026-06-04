import { useState } from 'react'

// Component hiển thị từng dòng ghi chú
const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

const App = (props) => {
  // 1. STATE QUẢN LÝ DỮ LIỆU
  const [notes, setNotes] = useState(props.notes)       // Danh sách ghi chú
  const [newNote, setNewNote] = useState('')            // Nội dung ô input
  const [showAll, setShowAll] = useState(true)          // Trạng thái bộ lọc

  // 2. HÀM XỬ LÝ SỰ KIỆN GÕ PHÍM (onChange)
  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  // 3. HÀM XỬ LÝ KHI BẤM NÚT SAVE (onSubmit)
  const addNote = (event) => {
    event.preventDefault() // Chặn tải lại trang
    
    // Tạo đối tượng ghi chú mới từ dữ liệu trong ô input
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5, // Random 50/50 xem có quan trọng không
      id: String(notes.length + 1),
    }

    // Nhét ghi chú mới vào State danh sách
    setNotes(notes.concat(noteObject))
    
    // Xóa trắng ô input để sẵn sàng gõ câu mới
    setNewNote('')
  }

  // 4. LOGIC LỌC DỮ LIỆU (Tạo mảng phái sinh để hiển thị)
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      
      {/* Nút bấm để đảo ngược trạng thái của biến showAll */}
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>

      {/* Chỉ map qua mảng đã được lọc (notesToShow) thay vì mảng gốc (notes) */}
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      {/* Form nhập liệu được khống chế bởi State newNote */}
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange} 
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App