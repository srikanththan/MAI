//import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Gauge } from '@mui/x-charts/Gauge';

const LabelContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

const ValueLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: theme.palette.text.primary,
}));

const DescriptionLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  maxWidth: '120px',
}));

export default function WorkflowComparisonGauge() {
  // Data for the gauges
  const traditionalHours = 10;
  const aiAgentHours = 2;
  const maxHours = 12; // Setting a max value for better visualization

  // Calculate percentage values for gauges
  const traditionalPercentage = (traditionalHours / maxHours) * 100;
  const aiPercentage = (aiAgentHours / maxHours) * 100;

  return (
    <Stack 
      direction={{ xs: 'column', md: 'row' }} 
      spacing={{ xs: 4, md: 6 }}
      alignItems="center"
      justifyContent="center"
      sx={{ padding: 3 }}
    >
      <LabelContainer>
        <Gauge 
          width={180} 
          height={180} 
          value={traditionalPercentage} 
          valueText={`${traditionalHours}h`}
          color="#ff6b6b"
        />
        <ValueLabel>{traditionalHours} hours/week</ValueLabel>
        <DescriptionLabel>Traditional Workflow: Time spent on repetitive tasks</DescriptionLabel>
      </LabelContainer>
      
      <LabelContainer>
        <Gauge 
          width={180} 
          height={180} 
          value={aiPercentage} 
          valueText={`${aiAgentHours}h`}
          color="#4ecdc4"
        />
        <ValueLabel>{aiAgentHours} hours/week</ValueLabel>
        <DescriptionLabel>AI Agents: Reduced time spent on repetitive tasks</DescriptionLabel>
      </LabelContainer>
    </Stack>
  );
}