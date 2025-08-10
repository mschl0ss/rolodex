import {Box} from "@mui/material";

function App() {

  return (
      <Box sx={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          height: "100vh",
          width: "100%",

      }}>
            <Box
                component={'main'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: 'white',
                    width: "100%",
                    border: 'solid 1px black',
                    // height:"100%",
                    margin: "24px",
                    borderRadius: 1,
                }}
            >
                <Box component={'header'}>
                    Rolodex App

                    {/*<Typography variant='h1'>*/}
                    {/*</Typography>*/}
                </Box>
                <Box component={'section'}>add new</Box>
                <Box component={'section'}>search</Box>
                <Box component={'section'}>components</Box>
            </Box>
      </Box>

  )
}

export default App
