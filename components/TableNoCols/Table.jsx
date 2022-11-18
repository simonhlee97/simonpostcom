import TableBody from './TableBody'
import { useSortableTable } from './useSortableTable'

const Table = ({ caption, data }) => {
	const [tableData, handleSorting] = useSortableTable(data)

	return (
		<>
			<table className="table">
				<caption>{caption}</caption>
				<TableHead {...{ handleSorting }} />
				<TableBody {...{ tableData }} />
			</table>
		</>
	)
}

export default Table
