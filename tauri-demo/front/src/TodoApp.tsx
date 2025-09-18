import { useRef, useState, FormEvent } from 'react';

export default function App() {
  const [items, setItems] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const v = inputRef.current?.value.trim() ?? '';
    if (!v) return;
    setItems(cur => [v, ...cur]);
    if (inputRef.current) { inputRef.current.value = ''; inputRef.current.focus(); }
  };

  return (
    <div>
      <h1>Todo React</h1>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} id="textInput" type="text" placeholder="To Do" />
        <button type="submit">追加</button>
      </form>
      <ul>{items.map((t,i)=><li key={i}>{t}</li>)}</ul>
    </div>
  );
}
