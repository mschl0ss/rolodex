import {Box, InputAdornment, Paper, type SxProps, TextField, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {type ReactNode, useState} from "react";
import {SearchProvider, useSearchStoreContext} from "./context/searchContext.tsx";

const Section = ({children, sx}: { children: ReactNode, sx?: SxProps } ) => (
    <Paper
        component={'section'}
        elevation={3}
        sx={{
            display: 'flex',
            width: "100%",
            // maxWidth: 900,
            padding: "8px",
            ...sx,
        }}>{children}</Paper>
)

const Search = () => {
    const {searchText, setSearchText} = useSearchStoreContext();

    const handleChange = (newText: string) => setSearchText(newText);

    return (
        <>
            <TextField
                label="Search"
                value={searchText}
                fullWidth
                onChange={e => handleChange(e.target.value)}
                slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    },
                }}
            />

        </>
    )
}
function App() {

  return (
      <Box sx={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          height: "100vh",
          width: "100%",

      }}>
            <Paper
                component={'main'}
                elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: 2,
                    width: "100%",
                    maxWidth: 900,
                    margin: "8px",
                    padding: "16px",
                }}
            >
                <Box component={'header'}>
                    <Typography variant='h1'>Rolodex App</Typography>
                </Box>
                <Section >add new</Section>
                <SearchProvider>
                    <Section ><Search /></Section>
                    <Section >results</Section>
                </SearchProvider>
            </Paper>
      </Box>

  )
}

export default App
