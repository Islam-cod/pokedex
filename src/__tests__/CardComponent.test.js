
import { render, screen } from '@testing-library/react';
import CardComponent from '../components/CardComponent'
import { MemoryRouter } from 'react-router-dom';
import mockFetch from '../mocks/mockFetch';

beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
 })
 
 afterEach(() => {
    jest.restoreAllMocks()
 });



test('Renders Pokomn Name', async () => {
    const name = 'tauros';

    render(<CardComponent name={name}/>, {wrapper: MemoryRouter});
    const textElement = screen.findByText(name);
    expect(await textElement).toBeInTheDocument();
});


test('Renders Pokemon Image', async () => {
    const name = 'tauros';
    const expectedUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png";
    
    render(<CardComponent name={name}/>, {wrapper: MemoryRouter});
    const pokemonImage = await screen.findByRole("img");

    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage.src === expectedUrl).toBeTruthy()

});

