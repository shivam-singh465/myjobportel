import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

function AppliedJobTable() {
    return (
        <div className='px-4'>
            <Table>
                <TableCaption>the list of job user applied</TableCaption>
                <TableHeader >
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1, 2, 3, 4].map((item, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>25/08/2025</TableCell>
                                    <TableCell>Front End Developer</TableCell>
                                    <TableCell>Google</TableCell>
                                    <TableCell ><Badge variant={"ouline"}>Selected</Badge></TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>

            </Table>
        </div>
    )
}

export default AppliedJobTable