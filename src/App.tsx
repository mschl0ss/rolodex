import {Box, Paper, Typography} from "@mui/material";

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
                    bgcolor: 'white',
                    width: "100%",
                    // border: 'solid 1px black',
                    // height:"100%",
                    margin: "8px",
                    // borderRadius: 1,
                }}
            >
                <Box component={'header'}>


                    <Typography variant='h1'>Rolodex App
                    </Typography>
                </Box>
                <Box component={'section'}>add new</Box>
                <Box component={'section'}>search</Box>
                <Box component={'section'}>components</Box>
            </Paper>
      </Box>

  )
}

export default App
