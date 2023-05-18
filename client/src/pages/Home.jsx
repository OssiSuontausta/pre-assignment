import { Box, Typography, Link } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{textAlign: "center", mt: "2%"}}>
      <Typography variant="h4">
        This is a city bike app inspired by Solita dev academy pre-assignment!
      </Typography>
      <Typography variant="h6">
        You can check out the assignment
        <Link sx={{ml: "5px"}} href="https://github.com/solita/dev-academy-2023-exercise">
        here
        </Link>
      </Typography>
      <Typography variant="body1" sx={{mt: "20px"}}>
        On "stations" page you can see a list of all the citybike stations. 
        By clickin the row of a station you can see the information for that station.
      </Typography>
      <Typography variant="body1">
        Stations can be sorted by a column, 
        just hover over the column you want to sort and click on it.
      </Typography>
      <Typography variant="body1" sx={{mt: "20px"}}>
        On "trips" page you can see a list of all the trips made with these citybikes. 
      </Typography>
      <Typography>
        Trips can also be sorted by column, 
        but the sorting will only apply to the 10 trips currently shown.
      </Typography>
      <Typography variant="body2" sx={{mt: "30px"}}>
        This page uses 3 trip datasets from 2021,
        owned by 
        <Link sx={{m: "0 5px 0 5px"}} href="https://www.citybikefinland.fi/">
        City Bike Finland
        </Link>
        and station dataset owned by 
        {/* eslint-disable-next-line*/}
        <Link sx={{ml: "5px"}} href="https://www.avoindata.fi/data/en_GB/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902">
        HSL
        </Link>
      </Typography>
    </Box>
  );
};

export default Home;