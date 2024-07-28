import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  howToBookHeadingStyle,
  timelineConnectorStyles,
  timelineContentStyle,
  timelineIcon,
  timelinePara,
  timelineTitle,
} from "./style";
import Icon from "@mui/material/Icon";
import { howToBookTimeline } from "../../../../public/data/how-to-book";
import Image from "next/image";

export default function HowToBook() {
  return (
    <Box>
      <Typography sx={howToBookHeadingStyle}>
        How <span>MarathiSarvaPooja</span> Works
      </Typography>
      <Timeline position="alternate">
        {howToBookTimeline.map((T) => (
          <TimelineItem key={T.id}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={T.timeline_dot_color}>
                <Icon sx={timelineIcon}>
                  <Image loading="lazy" width={"30"} height={"30"} src={T.img.src} alt={T.img.alt} />
                </Icon>
              </TimelineDot>
              <TimelineConnector sx={timelineConnectorStyles} />
            </TimelineSeparator>
            <TimelineContent sx={timelineContentStyle}>
              <Typography variant="h6" component="span" sx={timelineTitle}>
                {T.title}
              </Typography>
              <Typography sx={timelinePara}>{T.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
