import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import GroupsIcon from '@mui/icons-material/Groups';
import '../App.css';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%'}}>
      <nav aria-label="main mailbox folders" className="list_info">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HowToVoteIcon />
              </ListItemIcon> 전교회장 투표앱
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PrecisionManufacturingIcon />
              </ListItemIcon>
              드론 소프트웨어
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              1학년 asp과제
              <ListItemText />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}