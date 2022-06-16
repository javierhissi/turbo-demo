const Row = ({ title, value }: { title: string, value: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', padding: "10px", border: "1px solid blue" }}>
        <label>{title}</label>
        <input value={value} disabled />
        <div>hola</div>
    </div>
)

export default Row;