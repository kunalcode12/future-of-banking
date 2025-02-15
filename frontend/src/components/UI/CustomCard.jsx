import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const StyledCardHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const StyledCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const StyledCardContent = styled.div`
  padding: 1.5rem;
`;

const StyledCardFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

export const Card = ({ children, className, ...props }) => (
  <StyledCard className={className} {...props}>
    {children}
  </StyledCard>
);

export const CardHeader = ({ children, className, ...props }) => (
  <StyledCardHeader className={className} {...props}>
    {children}
  </StyledCardHeader>
);

export const CardTitle = ({ children, className, ...props }) => (
  <StyledCardTitle className={className} {...props}>
    {children}
  </StyledCardTitle>
);

export const CardContent = ({ children, className, ...props }) => (
  <StyledCardContent className={className} {...props}>
    {children}
  </StyledCardContent>
);

export const CardFooter = ({ children, className, ...props }) => (
  <StyledCardFooter className={className} {...props}>
    {children}
  </StyledCardFooter>
);
