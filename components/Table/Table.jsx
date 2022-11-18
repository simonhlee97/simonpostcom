import { TableBody } from './TableBody'
import { TableHead } from './TableHead'
import { useSortableTable } from './useSortableTable'

export const Table = ({ caption, data, columns, headers }) => {
	const [tableData, handleSorting] = useSortableTable(data, columns)

	return (
		<>
			<table className="table">
				<caption>{caption}</caption>
				<TableHead {...{ columns, headers, handleSorting }} />
				<TableBody {...{ columns, tableData }} />
			</table>
		</>
	)
}
