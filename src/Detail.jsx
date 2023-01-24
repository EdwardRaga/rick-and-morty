import React from "react";
import { connect } from "react-redux";
import { getDetail } from "./redux/action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 5px;
`;

const CardImage = styled.img`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: 20px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

function Detail({ detail, state }) {
  const { id } = useParams();

  useEffect(() => {
    detail(id);
  }, []);

  return (
    <DivWrapper>
      <CardWrapper>
        {state && <CardImage src={state.image} alt={state.image} />}
        <div>
          {state && (
            <p>
              {" "}
              <strong>Name:</strong> {state.name}
            </p>
          )}
          {state.location && (
            <p>
              {" "}
              <strong>Location:</strong> {state.location.name}
            </p>
          )}
          {state.origin && (
            <p>
              {" "}
              <strong>Origin:</strong> {state.origin.name}
            </p>
          )}
          {state && (
            <p>
              <strong>Created:</strong> {state.created}
            </p>
          )}
        </div>
      </CardWrapper>
    </DivWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.detail,
    loading: state.loading,
    error: state.error,
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    detail: (id) => dispatch(getDetail(id)),
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(Detail);
