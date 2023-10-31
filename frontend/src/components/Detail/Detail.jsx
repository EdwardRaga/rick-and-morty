import React, { useState } from "react";
import { connect } from "react-redux";
import { getDetail } from "../../redux/action";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

/* The above code is using styled-components to style the components. */
const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: px;
  padding-bottom: 100px;
`;

const CardWrapper = styled.div`
  background-color: rgba(245, 245, 245, 0.1);
  padding: 1rem;
  border-radius: 5px;
  justify-content: center;
`;

const CardImage = styled.img`
  margin-right: 30px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 10px auto;
  boder-radius: 5px;
`;

const TableHeader = styled.th`
  background-color: #3e3180;
  color: #fff;
  font-weight: normal;
  padding: 10px;
  text-align: left;
`;

const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;
  line-height: 30px;
  text-align: justify;
`;

/**
 * It's a function that takes in a detail and a state, and returns a div that contains a card that
 * contains a table that contains a bunch of table data.
 * @returns The state.detail is being returned.
 */
function Detail({ detail, state }) {
  const { id } = useParams();

  useEffect(() => {
    detail(id);
  }, [id, state.detail]);

  return (
    <DivWrapper>
      <CardWrapper>
        {state.name && (
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>Character</TableHeader>
                <TableHeader>Location</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Specie</TableHeader>
                <TableHeader>Gender</TableHeader>
                <TableHeader>Origin</TableHeader>
                <TableHeader>Type</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableData>{state.name}</TableData>
                <TableData>{state.location.name}</TableData>
                <TableData>{state.status}</TableData>
                <TableData>{state.species}</TableData>
                <TableData>{state.gender}</TableData>
                <TableData>{state.origin.name}</TableData>
                <TableData>{state.type}</TableData>
              </tr>

              {/* Agrega más filas según sea necesario */}
            </tbody>
          </TableContainer>
        )}
        <Section>
          <CardImage src={state.image} alt={state.image} />
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              sit tempore laborum sed exercitationem enim minus maiores
              voluptate! Explicabo totam unde blanditiis delectus error? Quia
              veritatis vero ratione tempora voluptatem. Ipsam, harum. Veniam
              delectus est neque, blanditiis autem explicabo temporibus alias
              maiores placeat dolores aliquam dolor distinctio omnis quae nobis
              tempore corporis odio exercitationem dolorum eos sunt animi hic.
              Eveniet. Quas quaerat accusantium quis provident ullam culpa
              consequuntur suscipit tenetur. Nihil eum delectus assumenda rerum
              iste quibusdam at necessitatibus iusto praesentium. Voluptate, at
              cumque nobis quos nesciunt est accusamus expedita? Repudiandae,
              aliquid quae? Ea rem nostrum, cumque eos beatae quidem aperiam
              culpa voluptatem illo obcaecati dolorum quas provident, maxime
              placeat repellat aspernatur! Consectetur tempore harum eligendi,
              quia sit voluptatibus sint? Molestiae suscipit placeat vel.
              Excepturi repudiandae eius enim beatae aliquid aut dolor quasi ex
              saepe impedit officiis dignissimos corporis sapiente voluptates
              labore adipisci, dolorum ipsum nemo quaerat ad pariatur atque.
            </p>
          </section>
        </Section>
      </CardWrapper>
    </DivWrapper>
  );
}

/**
 * This function takes the state of the Redux store and returns an object that maps the state to the
 * props of the component.
 * @returns The state of the detail reducer.
 */
const mapStateToProps = (state) => {
  return {
    state: state.detail,
  };
};
/**
 * MapDipatchToProps is a function that takes in a dispatch function as an argument and returns an
 * object with a detail property that is a function that takes in an id as an argument and returns a
 * dispatch function that takes in a getDetail function as an argument.
 * @returns An object with a detail property that is a function that takes an id and returns a dispatch
 * of the getDetail function with the id passed in.
 */

const mapDipatchToProps = (dispatch) => {
  return {
    detail: (id) => dispatch(getDetail(id)),
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(Detail);
