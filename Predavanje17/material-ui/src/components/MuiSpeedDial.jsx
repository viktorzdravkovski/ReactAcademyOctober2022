import { SpeedDial, SpeedDialAction, Container } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReportIcon from "@mui/icons-material/Report";
import BugReportIcon from "@mui/icons-material/BugReport";

const MuiSpeedDial = () => {
  return (
    <Container>
      <SpeedDial
        ariaLabel="speed-dial"
        icon={<SpeedDialIcon openIcon={<ShareIcon />} />}
        sx={{ position: "absolute", bottom: 10, right: 10 }}
      >
        <SpeedDialAction
          icon={<ContentCopyIcon />}
          tooltipTitle="Copy"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<ReportIcon />}
          tooltipTitle="Report"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<BugReportIcon />}
          tooltipTitle="Bug Report"
          tooltipOpen
        />
      </SpeedDial>
    </Container>
  );
};

export default MuiSpeedDial;
