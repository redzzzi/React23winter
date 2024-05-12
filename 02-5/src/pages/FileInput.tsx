import type {ChangeEvent} from 'react'

export default function FileInput() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i) // or        file = files[i]
        console.log(`file[${i}]: `, file) // 업로드 된 파일에 인덱싱하기
      }
    }
  }
  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={onChange} multiple accept="image/*" />
    </div>
  )
}
