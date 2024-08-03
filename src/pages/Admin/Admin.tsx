import React, { useState } from 'react';
import './Admin.css';
import Navbar from './Navbar';
import { Container, Row, Col, Form, Button, Card, Modal } from 'react-bootstrap';

export default function Admin() {
  const [inputText, setInputText] = useState('');
  const [pendingRecipes, setPendingRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addRecipe = () => {
    const newRecipe = {
      treatmentId: (pendingRecipes.length + 1).toString(),
      treatmentName: inputText,
      diseases: ["البرد"],
      benefits: ["تقوية المناعة"],
      dosageAmount: "ملعقة كبيرة",
      timings: ["صباحًا"],
      warnings: [],
      herbs: [
        { name: "زعتر", part: "أوراق", amount: "حفنة" },
        { name: "كركم", part: "جذر", amount: "قطعة صغيرة" }
      ],
      herbsAid: [],
      conflictsHighBloodPressure: false,
      conflictsDiabetes: false,
      conflictsHeartDisease: true,
      pregnancyWarning: false,
      childWarning: false,
      breastfeedingWarning: true
    };
    setPendingRecipes([...pendingRecipes, newRecipe]);
    setInputText('');
  };

  const editRecipe = (index) => {
    setEditingRecipe({ ...pendingRecipes[index], index });
  };

  const saveRecipe = () => {
    const updatedRecipes = [...pendingRecipes];
    updatedRecipes[editingRecipe.index] = editingRecipe;
    setPendingRecipes(updatedRecipes);
    setEditingRecipe(null);
  };

  const addToGraph = (index) => {
    console.log("إضافة للغراف:", pendingRecipes[index]);
    // يمكنك هنا إضافة منطق إضافة الوصفة للنظام الرئيسي
  };

  return (
    <>
      <Navbar/>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h2>أدخل الوصفة</h2>
            <Form>
              <Form.Group controlId="formRecipeText">
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="أدخل النص هنا..."
                />
              </Form.Group>
              <Button variant="primary" onClick={addRecipe} className="mt-2">
                إضافة للوصفات قيد المراجعة
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>الوصفات قيد المراجعة</h3>
            {pendingRecipes.map((recipe, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title>{recipe.treatmentName}</Card.Title>
                  <Button variant="warning" onClick={() => editRecipe(index)} className="me-2">
                    تحرير
                  </Button>
                  <Button variant="success" onClick={() => addToGraph(index)}>
                    إضافة للغراف
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

      <Modal show={editingRecipe !== null} onHide={() => setEditingRecipe(null)}>
        <Modal.Header closeButton>
          <Modal.Title>تحرير الوصفة</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingRecipe && (
            <Form>
              <Form.Group controlId="formEditRecipeName">
                <Form.Label>اسم الوصفة</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingRecipe.treatmentName}
                  onChange={(e) => setEditingRecipe({ ...editingRecipe, treatmentName: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formEditRecipeDiseases">
                <Form.Label>الأمراض</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingRecipe.diseases.join(', ')}
                  onChange={(e) => setEditingRecipe({ ...editingRecipe, diseases: e.target.value.split(', ') })}
                />
              </Form.Group>
              <Form.Group controlId="formEditRecipeBenefits">
                <Form.Label>الفوائد</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingRecipe.benefits.join(', ')}
                  onChange={(e) => setEditingRecipe({ ...editingRecipe, benefits: e.target.value.split(', ') })}
                />
              </Form.Group>
              <Form.Group controlId="formEditRecipeDosage">
                <Form.Label>الجرعة</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingRecipe.dosageAmount}
                  onChange={(e) => setEditingRecipe({ ...editingRecipe, dosageAmount: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formEditRecipeTimings">
                <Form.Label>الأوقات</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingRecipe.timings.join(', ')}
                  onChange={(e) => setEditingRecipe({ ...editingRecipe, timings: e.target.value.split(', ') })}
                />
              </Form.Group>
              <Form.Group controlId="formEditRecipeWarnings">
                <Form.Label>التحذيرات</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingRecipe.warnings.join(', ')}
                  onChange={(e) => setEditingRecipe({ ...editingRecipe, warnings: e.target.value.split(', ') })}
                />
              </Form.Group>
              <Form.Group controlId="formEditRecipeHerbs">
                <Form.Label>الأعشاب</Form.Label>
                <Form.Control 
                  type="text" 
                  value={editingRecipe.herbs.map(herb => `${herb.name}:${herb.part}:${herb.amount}`).join(', ')}
                  onChange={(e) => setEditingRecipe({ ...editingRecipe, herbs: e.target.value.split(', ').map(herb => {
                    const [name, part, amount] = herb.split(':');
                    return { name, part, amount };
                  }) })}
                />
              </Form.Group>
              <Form.Check 
                type="checkbox" 
                label="تعارض مع ارتفاع ضغط الدم" 
                checked={editingRecipe.conflictsHighBloodPressure}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, conflictsHighBloodPressure: e.target.checked })}
              />
              <Form.Check 
                type="checkbox" 
                label="تعارض مع السكري" 
                checked={editingRecipe.conflictsDiabetes}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, conflictsDiabetes: e.target.checked })}
              />
              <Form.Check 
                type="checkbox" 
                label="تعارض مع أمراض القلب" 
                checked={editingRecipe.conflictsHeartDisease}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, conflictsHeartDisease: e.target.checked })}
              />
              <Form.Check 
                type="checkbox" 
                label="تحذير الحمل" 
                checked={editingRecipe.pregnancyWarning}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, pregnancyWarning: e.target.checked })}
              />
              <Form.Check 
                type="checkbox" 
                label="تحذير للأطفال" 
                checked={editingRecipe.childWarning}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, childWarning: e.target.checked })}
              />
              <Form.Check 
                type="checkbox" 
                label="تحذير الرضاعة" 
                checked={editingRecipe.breastfeedingWarning}
                onChange={(e) => setEditingRecipe({ ...editingRecipe, breastfeedingWarning: e.target.checked })}
              />
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditingRecipe(null)}>
            إلغاء
          </Button>
          <Button variant="primary" onClick={saveRecipe}>
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
