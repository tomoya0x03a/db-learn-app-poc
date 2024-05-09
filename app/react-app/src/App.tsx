import React, { useEffect, useRef } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Height, Padding } from '@mui/icons-material';
import { styled } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LeaderLine from "leader-line-new";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';

const style = {
  p: 0,
  width: '100%',
  maxWidth: 200,
  border: '2px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
  fontweight: 100,
};

const StyledListItem = styled(ListItem)({
  paddingTop: '0px',
  paddingBottom: '0px',
});

interface Data {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  protein: number;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width: number;
}

type Sample = [string, number, number, number, number];

const sample: readonly Sample[] = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return { id, dessert, calories, fat, carbs, protein };
}

const columns: ColumnData[] = [
  {
    width: 200,
    label: 'Dessert',
    dataKey: 'dessert',
  },
  {
    width: 120,
    label: 'Calories\u00A0(g)',
    dataKey: 'calories',
    numeric: true,
  },
  {
    width: 120,
    label: 'Fat\u00A0(g)',
    dataKey: 'fat',
    numeric: true,
  },
  {
    width: 120,
    label: 'Carbs\u00A0(g)',
    dataKey: 'carbs',
    numeric: true,
  },
  {
    width: 120,
    label: 'Protein\u00A0(g)',
    dataKey: 'protein',
    numeric: true,
  },
];

const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Data) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ListDividers() {
  const corporation = useRef<HTMLDivElement>(null);
  const corporateAnniversary = useRef<HTMLDivElement>(null);
  const nationalHoliday = useRef<HTMLDivElement>(null);
  const employee = useRef<HTMLDivElement>(null);
  const department = useRef<HTMLDivElement>(null);
  const evaluation = useRef<HTMLDivElement>(null);
  const retirement = useRef<HTMLDivElement>(null);
  const goal = useRef<HTMLDivElement>(null);
  const performance = useRef<HTMLDivElement>(null);
  const leaderSettings = {
    color: 'black',
    size: 2,
    path: 'straight',
    endPlug: 'arrow1',
    endPlugSize: 1,
  }

  useEffect(() => {
    new LeaderLine(
      corporation.current,
      corporateAnniversary.current,
      leaderSettings,
    )
    new LeaderLine(
      corporation.current,
      employee.current,
      leaderSettings,
    )
    new LeaderLine(
      LeaderLine.pointAnchor(corporation.current, { x: '100%', y: '100%' }),
      LeaderLine.pointAnchor(department.current, { x: '0%', y: '0%' }),
      leaderSettings,
    )
    new LeaderLine(
      LeaderLine.pointAnchor(department.current, { x: '0%', y: 50 }),
      LeaderLine.pointAnchor(employee.current, { x: '100%', y: 50 }),
      leaderSettings,
    )
    new LeaderLine(
      LeaderLine.pointAnchor(employee.current, { x: '100%', y: 100 }),
      LeaderLine.pointAnchor(department.current, { x: '0%', y: 100 }),
      leaderSettings,
    )
    new LeaderLine(
      employee.current,
      retirement.current,
      {
        ...leaderSettings,
        endPlug: 'behind',
      }
    )
    new LeaderLine(
      LeaderLine.pointAnchor(employee.current, { x: '100%', y: '100%' }),
      LeaderLine.pointAnchor(goal.current, { x: '0%', y: '25%' }),
      leaderSettings,
    )
    new LeaderLine(
      LeaderLine.pointAnchor(employee.current, { x: '100%', y: 170 }),
      LeaderLine.pointAnchor(evaluation.current, { x: '0%', y: 170 }),
      leaderSettings,
    )
    new LeaderLine(
      LeaderLine.pointAnchor(employee.current, { x: '100%', y: 180 }),
      LeaderLine.pointAnchor(evaluation.current, { x: '0%', y: 180 }),
      leaderSettings,
    )
    new LeaderLine(
      goal.current,
      performance.current,
      {
        ...leaderSettings,
        endPlug: 'behind',
      }
    )
    new LeaderLine(
      performance.current,
      evaluation.current,
      {
        ...leaderSettings,
        endPlug: 'behind',
      }
    )
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              データベースドットコム
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth='xl'>
        <Box sx={{ margin: 1 }}>
          <Typography variant="h5">
            令和5年秋期
          </Typography>
        </Box>
        <Box sx={{ marginBottom: 5 }}>
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={corporation}>
                <StyledListItem>
                  <ListItemText primary="会社" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="会社番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="会社名" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="業種" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={corporateAnniversary}>
                <StyledListItem>
                  <ListItemText primary="会社記念日" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="会社番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="会社記念日" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="会社記念日名" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={nationalHoliday}>
                <StyledListItem>
                  <ListItemText primary="国民の祝日" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="祝日" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="祝日名" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: 5 }}>
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={employee}>
                <StyledListItem>
                  <ListItemText primary="従業員" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="会社番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="従業員番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="従業員氏名" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="部署番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="入社年月日" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="退職年月日" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={department}>
                <StyledListItem>
                  <ListItemText primary="部署" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="会社番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="部署番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="部署名" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="管理者番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={evaluation}>
                <StyledListItem>
                  <ListItemText primary="評価" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="会社番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="従業員番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標設定年度" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="管理者番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="評価内容" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="達成度合" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: 5 }}>
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={retirement}>
                <StyledListItem>
                  <ListItemText primary="退職" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="従業員番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="在籍期間" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="退職理由" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={goal}>
                <StyledListItem>
                  <ListItemText primary="目標" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="会社番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="従業員番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標設定年度" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標内容" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標の重み" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List sx={style} aria-label="mailbox folders" ref={performance}>
                <StyledListItem>
                  <ListItemText primary="実績" />
                </StyledListItem>
                <Divider component="li" />
                <StyledListItem>
                  <ListItemText primary="会社番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="従業員番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標設定年度" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標番号" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="実績内容" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
                <StyledListItem>
                  <ListItemText primary="目標達成度" primaryTypographyProps={{ variant: 'body2' }} />
                </StyledListItem>
              </List>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
        <Paper style={{ height: 400, width: '100%' }}>
          <TableVirtuoso
            data={rows}
            components={VirtuosoTableComponents}
            fixedHeaderContent={fixedHeaderContent}
            itemContent={rowContent}
          />
        </Paper>
      </Container>
    </div>
  );
}

