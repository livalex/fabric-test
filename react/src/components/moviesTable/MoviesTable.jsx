import React from "react";
import classes from "./MoviesTable.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@material-ui/core";

const MoviesTable = (props) => {
  const { movies } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const definedMovies = movies === undefined ? [] : movies;

  return (
    <div className={classes.container}>
      <Paper>
        <TableContainer id="table" style={{ maxHeight: 800 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">imdbID</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Poster</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {definedMovies
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((movie) => (
                  <TableRow key={movie.Title}>
                    <TableCell component="th" scope="row">
                      {movie.Title}
                    </TableCell>
                    <TableCell align="right">{movie.Year}</TableCell>
                    <TableCell align="right">{movie.imdbID}</TableCell>
                    <TableCell align="right">{movie.Type}</TableCell>
                    <TableCell align="right">{movie.Poster}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={definedMovies.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </div>
  );
};

export default MoviesTable;
