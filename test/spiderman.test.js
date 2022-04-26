describe("Unit Test for Spiderman", () => {
    test('Case 1: Get a Spiderman', () => {
      const spiderman1 = new Spiderman("Amazing Spiderman", "Andrew Garfield", "Peter Parker")
      expect(spiderman1.name).toBe("Amazing Spiderman");
      expect(spiderman1.actor).toBe("Andrew Garfield");
      expect(spiderman1.heroName).toBe("Peter Parker");
    });
  })